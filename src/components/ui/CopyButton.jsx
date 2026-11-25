import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import Button from './Button.jsx';

export default function CopyButton({ text, label = 'Copy message', variant = 'outline', className }) {
  const [state, setState] = useState('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
    setTimeout(() => setState('idle'), 2500);
  }

  return (
    <Button variant={variant} onClick={copy} className={className}>
      {state === 'copied' ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">
        {state === 'copied' ? 'Copied' : state === 'failed' ? 'Select the text to copy' : label}
      </span>
    </Button>
  );
}
