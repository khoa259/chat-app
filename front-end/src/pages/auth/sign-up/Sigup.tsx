import InputText from "@/components/controls/input/InputText";
import { urlRoute } from "@/routes/routes";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const methods = useForm();
  const { t } = useTranslation();
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div>
      <div className="heading mb-12">
        <h1 className="text-2xl font-semibold capitalize text-gray-500">{t("Signup")} !</h1>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className="content z-10">
            <InputText name="email" label="Email" placeholder={t("Enterx", { x: t("Email") })} className="mb-3" />
            <InputText name="username" label="Username" placeholder={t("Enterx", { x: t("username") })} className="mb-3" />
            <InputText name="password" label="Password" type="password" placeholder={t("Enterx", { x: t("password") })} />

            <div className="text-end text-sm font-normal my-3 underline">
              <Link to={urlRoute.FORGOT_PASSWORD}>{t("ForgotPassword")}</Link>
            </div>

            <button type="submit" className="block w-full rounded-sm px-5 py-2 bg-[var(--cl-green)] text-stone-50">
              {t("Signup")}
            </button>
            <div className="flex items-center mt-5">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-sm font-medium text-gray-500">Sign in with</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <div className="mt-3">
              <button className="flex items-center justify-center w-full rounded-sm px-5 py-2 bg-transparent border border-gray-300 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M29.44,16.318c0-.993-.089-1.947-.255-2.864h-13.185v5.422h7.535c-.331,1.744-1.324,3.22-2.813,4.213v3.525h4.544c2.647-2.444,4.175-6.033,4.175-10.296Z" fill="blue"></path>
                  <path d="M16,30c3.78,0,6.949-1.247,9.265-3.385l-4.544-3.525c-1.247,.84-2.838,1.349-4.722,1.349-3.64,0-6.733-2.456-7.84-5.765l-2.717,2.09-1.941,1.525c2.304,4.569,7.025,7.713,12.498,7.713Z" fill="green"></path>
                  <path d="M8.16,18.66c-.28-.84-.445-1.731-.445-2.66s.165-1.82,.445-2.66v-3.615H3.502c-.955,1.884-1.502,4.009-1.502,6.275s.547,4.391,1.502,6.275h3.332s1.327-3.615,1.327-3.615Z" fill="red"></path>
                  <path d="M16,7.575c2.062,0,3.895,.713,5.358,2.087l4.009-4.009c-2.431-2.265-5.587-3.653-9.367-3.653-5.473,0-10.195,3.144-12.498,7.725l4.658,3.615c1.107-3.309,4.2-5.765,7.84-5.765Z" fill="#fbbc05"></path>
                </svg>
                Login with Google
              </button>
            </div>
            <div className="mt-20 text-center">
              <p>
                {t("Already have an account ?")}
                <Link className="font-medium text-[var(--cl-green)] underline" to={urlRoute.LOGIN}>
                  {t("Login")}
                </Link>
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpPage;
