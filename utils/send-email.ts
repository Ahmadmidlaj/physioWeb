import { FormData } from "@/app/_components/Hero";
// utils/send-email.ts
export function sendEmail(data: FormData): Promise<string> {
    const apiEndpoint = '/api/email';
  
    return fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === 'Email sent') {
          return Promise.resolve(response.message);
        } else {
          return Promise.reject(response.error);
        }
      })
      .catch((err) => Promise.reject(err.toString()));
  }