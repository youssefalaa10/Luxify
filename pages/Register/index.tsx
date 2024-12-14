import ImageSection from "@/components/Auth/image-section";
import AuthForm from "@/components/Auth/register-form";

const Register = () => {
  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="flex-1 relative h-screen">
        <ImageSection />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <AuthForm />
      </div>
    </div>
  );
};

export default Register;