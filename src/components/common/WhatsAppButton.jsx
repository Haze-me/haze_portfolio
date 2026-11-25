import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { site } from '../../config/site.js';
import { defaultMessage, isRealNumber, whatsappUrl } from '../../utils/whatsapp.js';
import Button from '../ui/Button.jsx';
import CopyButton from '../ui/CopyButton.jsx';
import Dialog from '../ui/Dialog.jsx';
import { cx } from '../../utils/format.js';

/**
 * Site WhatsApp contact. With a number configured it opens the chat. Until
 * then it explains the placeholder instead of pretending to reach anyone.
 */
export default function WhatsAppButton({ message = defaultMessage, label = 'Chat on WhatsApp', floating, variant = 'whatsapp', size, className }) {
  const [open, setOpen] = useState(false);
  const configured = isRealNumber(site.whatsapp);
  const floatingClasses =
    'fixed right-4 bottom-4 z-40 size-14 rounded-full p-0! shadow-lift sm:right-6 sm:bottom-6';

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cx(floating && floatingClasses, className)}
        aria-label={floating ? label : undefined}
        {...(configured ? { href: whatsappUrl(message, site.whatsapp) } : { onClick: () => setOpen(true) })}
      >
        <MessageCircle className={floating ? 'size-7' : 'size-5'} aria-hidden="true" />
        {!floating && label}
      </Button>
      {!configured && (
        <Dialog open={open} onClose={() => setOpen(false)} title="WhatsApp number not added yet">
          <p className="text-muted">
            This site is using the placeholder <strong>{site.whatsapp}</strong>. You can still open
            WhatsApp with the message below, but you will need to choose who receives it.
          </p>
          <p className="mt-4 rounded-xl bg-mist p-4 text-sm whitespace-pre-wrap select-all">{message}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button variant="whatsapp" href={whatsappUrl(message)}>
              Open WhatsApp
            </Button>
            <CopyButton text={message} />
          </div>
        </Dialog>
      )}
    </>
  );
}
