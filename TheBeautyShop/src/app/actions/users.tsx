"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Swal from 'sweetalert2';

export async function handleLogin(formData: FormData) {
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const { error } = await res.json();
    if (error === "user_not_found") {
      Swal.fire({
        icon: 'error',
        title: 'User Not Found',
        text: 'The username entered does not exist.',
      });
    } else if (error === "incorrect_password") {
      Swal.fire({
        icon: 'error',
        title: 'Incorrect Password',
        text: 'The password entered is incorrect.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'An error occurred while trying to login.',
      });
    }
    redirect ("/login");
  } else {
    const { access_token } = await res.json();
    cookies().set("Authorization", `Bearer ${access_token}`);
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: 'You have been successfully logged in.',
    });
    redirect("/");
  }
}
export async function handleRegister(formData: FormData) {
  const userInput = {
    username: formData.get("username"),
    password: formData.get("password"),
    name: formData.get("name"),
    email: formData.get("email"),
  };
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users/register", {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);

  if (!res.ok) {
    throw new Error("Registration Failed, Please try again.");
  }
  redirect("/login");
}

export async function handleLogout() {
  cookies().delete("Authorization");
  Swal.fire({
    icon: 'success',
    title: 'Logged Out',
    text: 'You have been successfully logged out.',
  });
  redirect("/login");
}
