import { ContactForm } from "@/types";

import { ReactElement, useRef, useState } from "react";
import { useFormik } from "formik";

import { SendHorizontal } from "lucide-react";

import emailjs from "@emailjs/browser";

import { Button, Stack, TextField, Typography } from "@mui/material";

import { Container } from "./common";

import {
  contactFormInitial,
  contactFormValidation,
  contactKey,
  publicKey,
  serviceKey,
} from "@/utils";

const Contact = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    if (ref.current) {
      setIsLoading(true);

      emailjs
        .sendForm(serviceKey, contactKey, ref.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setIsLoading(false);
            contactForm.resetForm();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsLoading(false);
          }
        );
    }
  };

  const contactForm = useFormik<ContactForm>({
    initialValues: contactFormInitial,
    validationSchema: contactFormValidation,
    onSubmit: (e: ContactForm) => {
      console.log(e);
      sendEmail();
    },
  });

  const renderForm = (): ReactElement => {
    return (
      <form ref={ref} onSubmit={contactForm.handleSubmit}>
        <Stack gap={2}>
          <TextField
            type="text"
            name="fullname"
            variant="outlined"
            label="Your name..."
            fullWidth
            value={contactForm.values.fullname}
            onChange={contactForm.handleChange}
            error={Boolean(
              contactForm.touched.fullname && contactForm.errors.fullname
            )}
            helperText={
              contactForm.touched.fullname && contactForm.errors.fullname
            }
          />
          <TextField
            type="email"
            name="email"
            variant="outlined"
            label="Your email..."
            fullWidth
            value={contactForm.values.email}
            onChange={contactForm.handleChange}
            error={Boolean(
              contactForm.touched.email && contactForm.errors.email
            )}
            helperText={contactForm.touched.email && contactForm.errors.email}
          />
          <TextField
            type="text"
            name="message"
            variant="outlined"
            label="Your message..."
            fullWidth
            multiline
            rows={5}
            value={contactForm.values.message}
            onChange={contactForm.handleChange}
            error={Boolean(
              contactForm.touched.message && contactForm.errors.message
            )}
            helperText={
              contactForm.touched.message && contactForm.errors.message
            }
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ gap: "0.5rem", alignItems: "center" }}
          >
            {isLoading ? (
              "loading..."
            ) : (
              <>
                Send message <SendHorizontal size={18} />
              </>
            )}
          </Button>
        </Stack>
      </form>
    );
  };

  return (
    <Container id="contact" title="Contact me">
      <Typography variant="body2" paddingBottom={"3rem"}>
        Got a project waiting to be realized? Let's collaborate and make it
        happen!
      </Typography>
      {renderForm()}
    </Container>
  );
};

export default Contact;
