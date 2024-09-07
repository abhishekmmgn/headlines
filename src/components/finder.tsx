"use client";

import { Button } from "./ui/button";
import Filter from "./filter";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { PiSpinner } from "react-icons/pi";
import { useState } from "react";

const formSchema = z.object({
  searchText: z
    .string()
    .min(20, {
      message: "Search text must be at least 20 characters.",
    })
    .max(128, {
      message: "Search text must be less  128 characters.",
    }),
});
import { useHasData } from "@/lib/store";

export default function Finder() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { hasData, changeHasData } = useHasData();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchText: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    changeHasData("searching");
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          term: values.searchText,
        }),
      });
      if (res.ok) {
        console.log(res.body);
        changeHasData(true);
        // toast.success("Verification link sent to your mail.");
      }
    } catch (err: any) {
      console.log("Error: ", err.message);
      // toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      <div className="text-center space-y-10">
        {!hasData && (
          <h1 className="mt-[10vh] text-4xl sm:text-5xl md:text-6xl font-semibold font-fontBold">
            Find news, articles, and more
          </h1>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-6"
          >
            <div className="relative max-w-xl mx-auto">
              <FormField
                control={form.control}
                name="searchText"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Find news, articles and more"
                        className="text-sm+ max-h-20 max-w-xl mx-auto border-b bg-clip-padding backdrop-filter backdrop-blur-sm bg-secondary md:min-h-20 hide-scrollbar"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Filter />
            </div>
            <Button disabled={isSubmitting} type="submit" className="max-w-xl">
              {isSubmitting ? (
                <PiSpinner className="animate-spin w-5 h-5" />
              ) : (
                <span>Find</span>
              )}
            </Button>
          </form>
        </Form>
        {/* <Filter /> */}
      </div>
    </div>
  );
}
