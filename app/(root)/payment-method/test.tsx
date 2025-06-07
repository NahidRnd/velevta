            <Form {...form}>
                <form
                method='post'
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
                >
                <h1 className='h2-bold mt-4'>Payment Method</h1>
                <p className='text-sm text-muted-foreground'>
                    Please select your preferred payment method
                </p>
                <div className='flex flex-col gap-5 md:flex-row'>
                    <FormField
                    control={form.control}
                    name='type'
                    render={({ field }) => (
                        <FormItem className='space-y-3'>
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            className='flex flex-col space-y-2'
                            >
                            {PAYMENT_METHODS.map((paymentMethod) => (
                                <FormItem
                                key={paymentMethod}
                                className='flex items-center space-x-3 space-y-0'
                                >
                                <FormControl>
                                    <RadioGroup
                                    value={paymentMethod}
                                    checked={field.value === paymentMethod}
                                    />
                                </FormControl>
                                <FormLabel className='font-normal'>
                                    {paymentMethod}
                                </FormLabel>
                                </FormItem>
                            ))}
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className='flex gap-2'>
                    <Button type='submit' disabled={isPending} className="text-white">
                    {isPending ? (
                        <Loader className='animate-spin w-4 h-4' />
                    ) : (
                        <ArrowRight className='w-4 h-4' />
                    )}
                    Continue
                    </Button>
                </div>
                </form>
            </Form>