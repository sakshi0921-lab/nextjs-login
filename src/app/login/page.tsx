import LoginForm from "@/components/LoginForm"; // Make sure to adjust import paths based on your structure

export default function LoginPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",
      backgroundImage: "url('/logo.jpg')",
       // Add background image
       backgroundSize:"100%",
      backgroundRepeat: "no-repeat",
     }}>
      <LoginForm />

    </div>
  );
}

