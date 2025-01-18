import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLibrary } from "../../hooks/useLibrary";
import { ButtonAdd } from "./styles";

const validationSchema = Yup.object({
  name: Yup.string().required("O nome do livro é obrigatório"),
  author: Yup.string().required("O autor é obrigatório"),
  pages: Yup.number()
    .typeError("O número de páginas deve ser um número")
    .positive("O número de páginas deve ser positivo")
    .required("O número de páginas é obrigatório"),
});

export function BookAdd() {
  const { addBook } = useLibrary();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data: { name: string; author: string; pages: number }) {
    addBook(data.name, data.author, data.pages);
    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ButtonAdd>Adicionar Livro</ButtonAdd>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dialog.Title>Adicionar Livro</Dialog.Title>

          <Dialog.Description size="2" mb="4">
            Adicione as informações do livro abaixo.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text size="2" mb="1" weight="bold">
                Nome
              </Text>

              <TextField.Root
                {...register("name")}
                placeholder="Nome do Livro"
              />

              {errors.name && <Text color="red">{errors.name.message}</Text>}
            </label>

            <label>
              <Text size="2" mb="1" weight="bold">
                Autor
              </Text>

              <TextField.Root
                {...register("author")}
                placeholder="Nome do Autor"
              />

              {errors.author && (
                <Text color="red">{errors.author.message}</Text>
              )}
            </label>

            <label>
              <Text size="2" mb="1" weight="bold">
                Páginas
              </Text>

              <TextField.Root
                {...register("pages")}
                placeholder="Número de Páginas"
                type="number"
              />

              {errors.pages && <Text color="red">{errors.pages.message}</Text>}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="red">
                Cancelar
              </Button>
            </Dialog.Close>

            <Button type="submit" color="green">
              Salvar
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
