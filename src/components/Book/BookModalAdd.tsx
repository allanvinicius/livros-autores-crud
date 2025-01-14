import { Dialog, Button, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../TextField";
import * as Yup from "yup";
import {
  StyledDialogContent,
  StyledForm,
  StyledFlex,
  ButtonGroup,
} from "./styles";
import { BookModalAddProps } from "../../types/types";

const validationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  author: Yup.string().required("O autor é obrigatório"),
  pages: Yup.number()
    .typeError("Número de páginas deve ser um número")
    .positive("Número de páginas deve ser positivo")
    .required("O número de páginas é obrigatório"),
});

export function BookModalAdd({ onSubmit }: BookModalAddProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: {
    name: string;
    author: string;
    pages: number;
  }) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button mt="3">Adicionar Livro</Button>
      </Dialog.Trigger>
      <StyledDialogContent style={{ maxWidth: 450 }}>
        <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Dialog.Title>Adicionar Livro</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Adicione as informações do seu livro abaixo.
          </Dialog.Description>

          <StyledFlex>
            <label>
              <TextField
                description="Nome do livro"
                type="text"
                placeholder="Nome do livro"
                {...register("name")}
              />
              {errors.name && (
                <Text color="red" size="2">
                  {errors.name.message?.toString()}
                </Text>
              )}
            </label>

            <label>
              <TextField
                description="Nome do autor"
                placeholder="Nome do autor"
                type="text"
                {...register("author")}
              />

              {errors.author && (
                <Text color="red" size="2">
                  {errors.author.message?.toString()}
                </Text>
              )}
            </label>

            <label>
              <TextField
                description="Número de páginas"
                placeholder="Número de páginas"
                type="number"
                {...register("pages")}
              />

              {errors.pages && (
                <Text color="red" size="2">
                  {errors.pages.message?.toString()}
                </Text>
              )}
            </label>
          </StyledFlex>

          <ButtonGroup>
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Button type="submit">Salvar</Button>
          </ButtonGroup>
        </StyledForm>
      </StyledDialogContent>
    </Dialog.Root>
  );
}
