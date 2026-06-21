import Link from "next/link";

export default function AuthFlowContainer({
  children,
  authState,
  footerContent,
}: {
  children: React.ReactNode;
  authState?: "signup" | "login" | "join";
  footerContent?: React.ReactNode;
}) {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="auth-card w-full max-w-md flex items-center text-center flex-col bg-background-tint-00 rounded-16 shadow-lg shadow-02 p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/three-crowns-wordmark.png"
          alt="Three Crowns"
          className="h-8 w-auto mb-2"
        />
        <div className="w-full mt-3">{children}</div>
      </div>
      {authState === "login" && (
        <div className="text-sm mt-6 text-center w-full text-text-03 mainUiBody mx-auto">
          {footerContent ?? (
            <>
              New to Three Crowns?{" "}
              <Link
                href="/auth/signup"
                className="text-text-05 mainUiAction underline transition-colors duration-200"
              >
                Create an Account
              </Link>
            </>
          )}
        </div>
      )}
      {authState === "signup" && (
        <div className="text-sm mt-6 text-center w-full text-text-03 mainUiBody mx-auto">
          Already have an account?{" "}
          <Link
            href="/auth/login?autoRedirectToSignup=false"
            className="text-text-05 mainUiAction underline transition-colors duration-200"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
