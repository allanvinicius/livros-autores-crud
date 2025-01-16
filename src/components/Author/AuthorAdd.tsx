import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLibrary } from "../../hooks/useLibrary";
import { FormData } from "../../types/types";

const validationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string().email("E-mail inválido"),
});

export function AuthorAdd() {
  const { addAuthor } = useLibrary();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data: FormData) {
    addAuthor(data.name, data.email ?? "");
    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button mt="3" color="gray">
          Adicionar Autor
        </Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dialog.Title>Adicionar Autor</Dialog.Title>

          <Dialog.Description size="2" mb="4">
            Adicione as informações do autor abaixo.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome
              </Text>

              <TextField.Root
                {...register("name")}
                placeholder="Nome do Autor"
              />

              {errors.name && <Text color="red">{errors.name.message}</Text>}
            </label>

            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                E-mail
              </Text>

              <TextField.Root
                {...register("email")}
                placeholder="E-mail do Autor"
              />

              {errors.email && <Text color="red">{errors.email.message}</Text>}
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
