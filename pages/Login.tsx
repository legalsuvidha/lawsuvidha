
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [terms, setTerms] = useState(false)
  const [showterms, setShowTerms] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setError('');
    if (!terms) {
      alert("Please agree to the Terms and Conditions before signing in.");
      return; // Stop form submission
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // This is where you would make the actual API call
      console.log('Login attempt with:', { email, password });

      // For demo purposes, let's just show an error
      // setError('Invalid email or password. Please try again.');

      navigate('/personal_dashboard')
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-legal-light">
      {/* <Navbar /> */}

      <div className="p-4">
        <Link
          to="/"
          className="inline-flex items-center text-legal-DEFAULT hover:text-legal-accent base-transition"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="heading-lg mb-2">Welcome Back</h1>
            <p className="text-legal-muted">Sign in to access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-legal-DEFAULT mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="input-field border 2px outline rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-legal-DEFAULT ">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-legal-DEFAULT hover:text-legal-accent"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="input-field pr-10 border 2px outline rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-legal-muted hover:text-legal-DEFAULT base-transition"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="mb-4 flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}

                className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-legal-DEFAULT"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="/" className="underline text-legal-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTerms(true);
                  }}>Terms and Conditions</a>
              </label>
            </div>
            {showterms && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative max-h-[80vh] overflow-y-auto">
                  <h2 className="text-lg font-semibold mb-4">Terms and Conditions</h2>

                  <div className="text-sm text-gray-700 space-y-4">
                    <p>
                      {/* Your actual terms go here. For demo: */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      ullamcorper, nisl vel convallis tristique, nisl nunc consectetur
                      nisl, eget convallis nisl nunc eget lorem. {/* You can repeat or scroll */}
                    </p>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p>
                      ...
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end gap-10">
                    <button
                      onClick={() => setShowTerms(false)}
                      className="text-sm text-gray-700 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setTerms(true);
                        setShowTerms(false);
                      }}
                      className="px-4 py-2 bg-black hover:bg-legal-accent text-white text-sm rounded-md"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className={cn(
                  "w-full py-3 px-4 rounded-md text-white font-medium base-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-legal-DEFAULT",
                  isSubmitting
                    ? "bg-legal-accent cursor-not-allowed"
                    : "bg-black hover:bg-legal-accent"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-legal-muted">
              Don't have an account?{' '}
              <Link to="/signup"
                className={`text-legal-DEFAULT font-medium ${isSubmitting ? 'pointer-events-none text-gray-400 cursor-not-allowed' : 'hover:text-legal-accent'}`}
                onClick={(e) => isSubmitting && e.preventDefault()}>
                Subscribe
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
