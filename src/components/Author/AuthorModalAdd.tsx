import { Dialog, Button, Flex, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../TextField";
import * as Yup from "yup";

// Esquema de validação com Yup
const validationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
});

// Tipagem das props
interface AuthorModalAddProps {
  onSubmit: (values: { name: string; email: string }) => void;
}

export function AuthorModalAdd({ onSubmit }: AuthorModalAddProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = (data: { name: string; email: string }) => {
    onSubmit(data);
    reset();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button mt="3">Adicionar Autor</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Dialog.Title>Adicionar Autor</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Adicione as informações do autor abaixo.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <TextField
                description="Nome do Autor"
                type="text"
                {...register("name")}
                placeholder="Nome do Autor"
              />
              {errors.name && (
                <Text color="red" size="2">
                  {errors.name.message?.toString()}
                </Text>
              )}
            </label>

            <label>
              <TextField
                description="E-mail do Autor"
                type="email"
                {...register("email")}
                placeholder="E-mail do Autor"
              />
              {errors.email && (
                <Text color="red" size="2">
                  {errors.email.message?.toString()}
                </Text>
              )}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Button type="submit">Salvar</Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
