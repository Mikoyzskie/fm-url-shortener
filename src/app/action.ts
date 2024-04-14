"use server";

import { z } from "zod";

const schema = z.object({
  url: z.string().min(1),
});

interface IResult {
  result_url: string;
}

export async function shorten(prevState: any, formData: FormData) {
  const validateURL = schema.safeParse({
    url: formData.get("url"),
  });

  if (!validateURL.success) {
    return { message: "Invalid URL" };
  }

  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: formData.get("url"),
      }),
    });

    if (!response.ok) {
      return { message: "internal error" };
    }

    const data: IResult = await response.json();

    console.log(data);

    return {
      message: "Success",
      url: data.result_url,
    };
  } catch (error) {
    return { message: "error" };
  }
}
