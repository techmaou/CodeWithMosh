import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { isValidElement } from "react";

const schema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: SubmitHandler<FormData>;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmit: SubmitHandler<FormData> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="select" className="form-label">
          Category
        </label>
        <select {...register("category")} id="select" className="form-select">
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
