import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useForm } from '../../hooks/useForm.js';
import { validatePropertyEnquiry } from '../../utils/validation.js';
import Button from '../ui/Button.jsx';
import FormField from '../forms/FormField.jsx';
import PendingNotice from '../forms/PendingNotice.jsx';
import { demoWhatsapp, generalMessage, propertyMessage } from './demoContact.js';

/** Property or general enquiry. Nothing is stored or sent by this demo form. */
export default function DemoEnquiryForm({ property }) {
  const { values, errors, onChange, check } = useForm(
    {
      fullName: '',
      phone: '',
      email: '',
      message: property ? 'I would like more details and to arrange an inspection.' : '',
    },
    validatePropertyEnquiry,
  );
  const [ready, setReady] = useState(false);

  const extra = [
    values.message.trim(),
    '',
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.email.trim() ? `Email: ${values.email.trim()}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n');
  const message = property ? propertyMessage(property, extra) : `${generalMessage}\n\n${extra}`;

  if (ready) {
    return (
      <div role="status">
        <p className="font-bold text-nest-900">Enquiry prepared. Nothing has been sent.</p>
        <p className="mt-1 text-sm text-slate-600">
          This is a demonstration form. On a live website it would deliver to the agency. You can send the
          message through WhatsApp now.
        </p>
        <pre className="mt-3 max-h-56 overflow-auto rounded-xl bg-nest-sand p-3 font-sans text-sm whitespace-pre-wrap">{message}</pre>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="whatsapp" href={demoWhatsapp(message)}>
            <MessageCircle className="size-4" aria-hidden="true" /> Send on WhatsApp
          </Button>
          <Button variant="outline" onClick={() => setReady(false)}>Edit</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (check(event.currentTarget)) setReady(true);
      }}
    >
      <PendingNotice>This is a demonstration form. It does not send or store anything.</PendingNotice>
      <FormField id="fullName" label="Full name" error={errors.fullName}>
        {(props) => <input {...props} value={values.fullName} onChange={onChange} autoComplete="name" />}
      </FormField>
      <FormField id="phone" label="Phone number" error={errors.phone}>
        {(props) => <input {...props} type="tel" value={values.phone} onChange={onChange} autoComplete="tel" />}
      </FormField>
      <FormField id="email" label="Email address" error={errors.email} optional>
        {(props) => <input {...props} type="email" value={values.email} onChange={onChange} autoComplete="email" />}
      </FormField>
      <FormField id="message" label="Message" error={errors.message}>
        {(props) => <textarea {...props} rows={4} value={values.message} onChange={onChange} maxLength={1000} />}
      </FormField>
      <Button type="submit" variant="nest" className="w-full">Prepare enquiry</Button>
    </form>
  );
}
