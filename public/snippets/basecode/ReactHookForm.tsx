// ■ React Packages

//-------------------------------
// React Hook Form
//-------------------------------
// pkg.RHF.
{
  import React, { useCallback } from "react"
  import { useForm, SubmitHandler } from "react-hook-form"

  type FormValues = {
    FIELD_NAME: string
  }

  type Compo = {
    defaultValue: FormValues
    testId: string
  }

  export const Compo = ({ value, testId }: Compo) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
      defaultValue: {
        FIELD_NAME: value.FIELD_NAME,
      },
    })

    const onSubmit: SubmitHandler<FormValues> = useCallback((data) => {
      console.log(data)
    }, [])

    return (
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("FIELD_NAME", { required: true })}
              data-testid={testId}
            />
            {errors.FIELD_NAME && <div>必須</div>}
          </div>

          <div>
            <button onClick={handleSubmit(onSubmit)}>検索</button>
            <label htmlFor="idReqFlag">必須</label>
          </div>
        </form>
      </section>
    )
  }
}
