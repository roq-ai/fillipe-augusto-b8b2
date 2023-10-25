import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  project_id: yup.string().nullable().required(),
});
