import { ContactForm } from "@/types";

import { ReactElement, useRef, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AtSignIcon, SendHorizontal, User2Icon } from "lucide-react";

import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Container } from "./common";

import {
  contactFormInitial,
  contactFormValidation,
  contactKey,
  publicKey,
  serviceKey,
} from "@/utils";

const Loader = styled("div")`
  width: 25px;
  padding: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ffffff;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

const StyledButton = styled(Button)({
  gap: "0.5rem",
  alignItems: "center",
  backgroundColor: "#0C0C0C",
  color: "#FFFFFF",
  boxShadow: "8px 8px 1px 0px #F97300",
});

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

            <StyledButton type="submit" variant="contained" fullWidth>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  Send message <SendHorizontal size={18} />
                </>
              )}
            </StyledButton>
          </Stack>
        </Card>
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
