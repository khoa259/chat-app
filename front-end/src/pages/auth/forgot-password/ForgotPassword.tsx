import InputText from "@/components/controls/input/InputText";
import { urlRoute } from "@/routes/routes";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FogotPasswordPage = () => {
  const methods = useForm();
  const { t } = useTranslation();
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <div>
      <div className="heading mb-12">
        <h1 className="text-2xl font-semibold capitalize text-gray-500">{t("Reset password")} !</h1>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit)}>
          <div className="content z-10">
            <div className="tag mb-2 block width-full rounded-sm px-5 py-2 bg-[#e2f2fc] border border-[#87cff2] text-slate-800 text-sm p-3">{t("Enter your Email and instructions will be sent to you!")}</div>
            <InputText name="email" label="Email" placeholder={t("Enterx", { x: t("Email") })} className="mb-3" />
            <button type="submit" className="block w-full rounded-sm px-5 py-2 bg-[var(--cl-green)] text-stone-50">
              {t("Reset")}
            </button>
            <div className="flex items-center mt-5">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-sm font-medium text-gray-500">Sign in with</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <div className="mt-20 text-center">
              <p>
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

export default FogotPasswordPage;
