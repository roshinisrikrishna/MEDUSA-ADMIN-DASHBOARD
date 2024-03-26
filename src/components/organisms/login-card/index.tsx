import { useAdminLogin } from "medusa-react"
import React, { useState,useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Button from "../../fundamentals/button"
import SigninInput from "../../molecules/input-signin"

type FormValues = {
  email: string
  password: string
}

type LoginCardProps = {
  toResetPassword: () => void
}

type Product = {
  id: string;
  title: string;
  // Add other product properties as needed
};

const LoginCard: React.FC<LoginCardProps> = ({ toResetPassword }) => {
  const [isInvalidLogin, setIsInvalidLogin] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate()
  const login = useAdminLogin()

  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dhruvcraftshouse.com/backend/store/products');
        const data = await response.json();
        console.log('data', data)
        setProducts(data); // Assuming the API returns an array of products directly
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount


  const onSubmit = (values: FormValues) => {
    login.mutate(values, {
      onSuccess: () => {
        navigate("/admin/orders")
      },
      onError: () => {
        setIsInvalidLogin(true)
        reset()
      },
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center">
        <span className="inter-2xlarge-semibold mt-4 text-grey-90">
          Welcome back!!!
        </span>
        <span className="inter-base-regular text-grey-50 mt-2">
          It's great to see you 👋🏼
        </span>
        <span className="inter-base-regular text-grey-50 mb-xlarge">
          Log in to your account below
        </span>
        <SigninInput
          placeholder="Email..."
          {...register("email", { required: true })}
          autoComplete="email"
        />
        <SigninInput
          placeholder="Password..."
          type={"password"}
          {...register("password", { required: true })}
          autoComplete="current-password"
        />
        {isInvalidLogin && (
          <span className="text-rose-50 w-full mt-2 inter-small-regular">
            These credentials do not match our records
          </span>
        )}
        <Button
          className="rounded-rounded mt-4 w-[320px] inter-base-regular"
          variant="primary"
          size="large"
          type="submit"
          loading={login.isLoading}
        >
          Continue
        </Button>
        <span
          className="inter-small-regular text-grey-50 mt-8 cursor-pointer"
          onClick={toResetPassword}
        >
          Reset password
        </span>
      </div>
    </form>
  )
}

export default LoginCard
