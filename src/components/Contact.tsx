import { ContactForm } from "@/types";

import { ReactElement, useRef, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AtSignIcon, SendHorizontal, User2Icon } from "lucide-react";

import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  contactFormInitial,
  contactFormValidation,
  contactKey,
  publicKey,
  serviceKey,
} from "@/utils";

import { Container, Loader } from "./common";

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
            toast.success("Submitted Successfully!");
            setIsLoading(false);
            contactForm.resetForm();
          },
          (error) => {
            toast.error("FAILED...", error.text);
            setIsLoading(false);
          }
        );
    }
  };

  const contactForm = useFormik<ContactForm>({
    initialValues: contactFormInitial,
    validationSchema: contactFormValidation,
    onSubmit: () => sendEmail(),
  });

  const renderForm = (): ReactElement => {
    return (
      <form ref={ref} onSubmit={contactForm.handleSubmit} data-aos="fade-up">
        <Card
          elevation={10}
          sx={{
            borderTopRightRadius: "2rem",
            borderTopLeftRadius: "2rem",
            padding: 5,
          }}
        >
          <Stack gap={2}>
            <TextField
              type="text"
              name="fullname"
              variant="outlined"
              label="Your name..."
              fullWidth
              color="warning"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <User2Icon />
                    </InputAdornment>
                  ),
                },
              }}
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
              color="warning"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AtSignIcon />
                    </InputAdornment>
                  ),
                },
              }}
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
              color="warning"
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

            <Button type="submit" variant="contained" fullWidth>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  Send message <SendHorizontal size={18} />
                </>
              )}
            </Button>
          </Stack>
        </Card>
      </form>
    );
  };

  return (
    <Container id="contact" title="Contact me">
      <Typography variant="body1" paddingBottom={"3rem"}>
        Got a project waiting to be realized? Let's collaborate and make it
        happen!
      </Typography>
      {renderForm()}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Container>
  );
};

export default Contact;
