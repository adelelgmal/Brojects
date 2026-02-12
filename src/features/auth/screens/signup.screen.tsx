import SignUpForm from "../components/signup/SignUpForm";
import SignUpHero from "../components/signup/SignUpHero";


export default function SignUpScreen() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-50">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <SignUpHero />
          <SignUpForm />
        </div>
      </main>
    </>
  )
}
