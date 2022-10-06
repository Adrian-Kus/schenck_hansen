import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import form from "components/templates/contact/ContactForm.module.css";
import { ContactCheckbox } from "components/templates/contact/ContactCheckbox";
import { useIsClient } from "components/templates/contact/ContactUseIsClient";
import { CaptchaField } from "components/templates/contact/ContactCaptchaField";

function ContactForm() {
  const [state, setState] = useState("IDLE");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      captcha: false,
    },
  });

  if (!useIsClient()) return null;

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        setState("SUCCESS");
      }
    } catch (err) {
      setState("ERROR");
    }
  }

  return (
    <>
      <div className={form.container}>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className={form.contact_form}
        >
          <input
            {...register("firstName", {
              required: "Bitte tragen Sie hier Ihren Vornamen ein.",
            })}
            className={form.field}
            type="text"
            name="firstName"
            placeholder="Vorname"
            aria-required="true"
          />
          <span className={form.error}>{errors?.firstName?.message}</span>
          <input
            {...register("lastName", {
              required: "Bitte tragen Sie hier Ihren Nachnamen ein.",
            })}
            className={form.field}
            type="text"
            name="lastName"
            placeholder="Nachname"
            aria-required="true"
          />
          <span className={form.error}>{errors?.lastName?.message}</span>
          <input
            {...register("email", {
              required: "Bitte tragen Sie hier Ihre E-Mail Adresse ein.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Die eingegebene E-Mail Adresse ist ungültig",
              },
            })}
            className={form.field}
            type="text"
            name="email"
            placeholder="E-Mail"
            aria-required="true"
          />
          <span className={form.error}>{errors?.email?.message}</span>
          <input
            {...register("phone", {
              required: "Bitte tragen Sie hier Ihre Telefonnummer ein.",
              pattern: {
                value:
                  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
              minLength: {
                value: 4,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
              maxLength: {
                value: 15,
                message: "Die eingegebene Telefonnummer ist ungültig.",
              },
            })}
            className={form.field}
            type="text"
            name="phone"
            placeholder="Telefon"
            aria-required="true"
          />
          <span className={form.error}>{errors?.phone?.message}</span>
          <textarea
            {...register("message", {
              required: "Bitte tragen Sie hier Ihre Nachricht ein.",
              maxLength: {
                value: 1000,
                message:
                  "Ihre Nachricht darf nicht länger als 1000 Zeichen sein.",
              },
            })}
            className={form.field}
            name="message"
            placeholder="Ihre Nachricht"
          />
          <p className={form.error}>{errors?.message?.message}</p>
          <ContactCheckbox
            name={"privacy"}
            control={control}
            className={form.fineprint}
            required={"Bitte bestätigen Sie die Datenschutzbestimmungen."}
          >
            Ich stimme der&nbsp;
            <Link href="/datenschutz">
              <a className={form.fineprint__link}>
                Daten&shy;schutz&shy;erklä&shy;rung
              </a>
            </Link>
            &nbsp;und einer Kon&shy;takt&shy;auf&shy;nahme durch die Schenck &
            Hansen KG per E-Mail oder Telefon zu.
          </ContactCheckbox>

          <CaptchaRow>
            <CaptchaField control={control} name={"captcha"} />
          </CaptchaRow>
          <button className={form.btn} type="submit">
            <span className={form.btn__inner}>Jetzt Nachricht senden</span>
          </button>
          <div className={form.info}>
            {state === "SUCCESS" && (
              <p>
                Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei
                Ihnen melden.
              </p>
            )}
            {state === "ERROR" && (
              <p className={form.info_error}>
                Das hat leider nicht geklappt. Bitte versuchen Sie es später
                noch einmal.
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

const CaptchaRow = styled.div`
  margin-top: 3em;
`;

export default ContactForm;
