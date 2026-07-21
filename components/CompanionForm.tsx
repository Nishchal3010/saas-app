// @ts-nocheck
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createCompanion } from "@/lib/actions/companion.actions"

const formSchema = z.object({
  name:     z.string().min(2, { message: "Companion name is required." }),
  subject:  z.string().min(1, { message: "Subject is required." }),
  topic:    z.string().min(2, { message: "Topic is required." }),
  voice:    z.string().min(1, { message: "Voice is required." }),
  style:    z.string().min(1, { message: "Style is required." }),
  duration: z.coerce.number().min(1, { message: "Duration is required." }),
})

const subjects = [
  "Maths",
  "Science",
  "English",
  "History",
  "Geography",
  "Coding",
  "Language",
]

const voices = [
  "Male",
  "Female",
]

const styles = [
  "Formal",
  "Casual",
  "Friendly",
  "Professional",
]

const CompanionForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:     "",
      subject:  "",
      topic:    "",
      voice:    "",
      style:    "",
      duration: 15,
    },
  })

  const onSubmit = async (values) => {
    const companion = await createCompanion(values)
    if (companion) {
      redirect(`/companions/${companion.id}`)
    } else {
      console.log("Failed to create companion")
      redirect('/')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Companion Builder</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >

          {/* Companion Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Companion name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Next.js Companion"
                    className="h-12 rounded-lg border border-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Subject
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-lg border border-gray-300">
                      <SelectValue placeholder="Select the subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Topic */}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  What should the companion help with?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Ex. Derivatives & Integrals"
                    className="rounded-lg border border-gray-300 min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Voice */}
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Voice
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-lg border border-gray-300">
                      <SelectValue placeholder="Select the voice" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {voices.map((voice) => (
                      <SelectItem key={voice} value={voice}>
                        {voice}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Style */}
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Style
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-lg border border-gray-300">
                      <SelectValue placeholder="Select the style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium">
                  Estimated session duration in minutes
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="15"
                    className="h-12 rounded-lg border border-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg text-base"
          >
            Build Your Companion
          </Button>

        </form>
      </Form>
    </div>
  )
}

export default CompanionForm