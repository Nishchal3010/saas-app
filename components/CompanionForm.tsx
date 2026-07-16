"use client"
// @ts-nocheck



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

const formSchema = z.object({
  name:     z.string().min(2, { message: "Companion name is required." }),
  subject:  z.string().min(2, { message: "Subject is required." }),
  topic:    z.string().min(2, { message: "Topic is required." }),
  duration: z.coerce.number().min(1, { message: "Duration is required." }),
})

const CompanionForm = () => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      duration: 30,
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Create Companion</CardTitle>
        <CardDescription>
          Fill in the details to create your companion.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Companion Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter companion name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 

            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter topic" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter duration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create Companion
            </Button>

          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default CompanionForm
