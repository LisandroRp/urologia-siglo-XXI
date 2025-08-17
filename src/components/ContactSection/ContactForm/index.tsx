import { useState } from 'react';
import { send } from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { FaStethoscope } from 'react-icons/fa';

type FormData = {
  time: string;
  name: string;
  email: string;
  message: string;
  botfield?: string; // honeypot
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string || "service_xhnmh1q";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string || "template_ylm8vl2";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string || "OMLDc_1_uh5TwYwiF";

export const ContactForm = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    // bloquea bots tontos
    if (data.botfield) return;

    setStatus('loading');
    try {
      // Los nombres deben matchear con las variables del template de EmailJS
      const templateParams = {
        ...data,
        time: new Date().toDateString(),
      };
      setValue('time', new Date().toDateString());
      // EmailJS v3: cuarto arg es la public key (string)
      // EmailJS v4 también acepta { publicKey: PUBLIC_KEY }; este funciona igual en la práctica
      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('success');
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      // limpiar estado de aviso después de unos segundos
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = "w-full p-3 border rounded-lg border-gray-300 text-black placeholder:text-gray-400 mb-0.5";

  return (
    <div className="max-w-2xl w-full p-10 m-10 mt-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <FaStethoscope className="text-3xl text-blue-600 animate-bounce mb-5" />
        <p className="text-sm text-gray-600 text-center">
          ¿Tenés dudas sobre algún tratamiento? Escribinos y te respondemos pronto.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* honeypot anti-spam */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('botfield')} />

        <div className="mb-4">
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            aria-invalid={!!errors.name}
            {...register('name', { required: true, minLength: 2 })}
            className={inputClass}
          />
          <div className="min-h-[20px]">
            {errors.name && <p className="text-red-500 text-sm">El nombre es obligatorio</p>}
          </div>
        </div>

        <div className="mb-4">
          <input
            id="email"
            type="email"
            placeholder="Email"
            aria-invalid={!!errors.email}
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
            className={inputClass}
          />
          <div className="min-h-[20px]">
            {errors.email && <p className="text-red-500 text-sm">Ingresá un email válido</p>}
          </div>
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            placeholder="Mensaje"
            rows={4}
            aria-invalid={!!errors.message}
            {...register('message', { required: true, minLength: 5 })}
            className={inputClass}
          />
          <div className="min-h-[20px]">
            {errors.message && <p className="text-red-500 text-sm">El mensaje es obligatorio</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition cursor-pointer"
        >
          {status === 'loading' ? 'Enviando…' : 'Enviar'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center mt-2">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center mt-2">Error al enviar el mensaje. Intentalo más tarde.</p>
        )}
      </form>
    </div>
  );
};
