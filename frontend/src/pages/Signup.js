import { useState } from "react";
import { signup } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isError = useSelector((state) => state.auth.isError);
  const dispatch = useDispatch();

  const Signupfunc = async (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(signup(user));
  };

  return (
    <div dir="rtl" className="w-full overflow-auto h-screen">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-main sm:text-3xl">
            تقييم أعضاء هيئة التدريس
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            المعذرة، لأسباب أمنية ومن أجل الحصول على بيانات أكثر دقة يجب تسجيل
            الدخول في الموقع للوصول إلى البيانات
          </p>

          <form
            action=""
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
            onSubmit={Signupfunc}
          >
            <p className="text-lg font-medium">سجل الدخول إلى حسابك</p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="البريد الإلكتروني"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <span className="absolute inset-y-0 inline-flex items-center left-4">
                  <ion-icon name="at-outline"></ion-icon>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="كلمة المرور"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <span className="absolute inset-y-0 inline-flex items-center left-4">
                  <ion-icon name="key-outline"></ion-icon>
                </span>
              </div>
            </div>

            {!isError ? (
              ""
            ) : (
              <div className="bg-red-200 rounded p-2">
                <h1 className="text-red-600 text-center">{isError}</h1>
              </div>
            )}

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-main rounded-lg"
            >
              تسجيل
            </button>
            <p className="text-sm text-center text-gray-500">
              لديك حساب بالفعل؟
              <Link className="underline" to="/login">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
