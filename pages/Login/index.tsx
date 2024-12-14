import ImageSection from "@/components/Auth/image-section";
import LoginForm from "@/components/Auth/login-form";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="flex-1 relative h-screen">
        <ImageSection />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
