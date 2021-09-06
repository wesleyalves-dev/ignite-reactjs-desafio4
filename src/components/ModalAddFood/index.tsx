import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";

interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  available: boolean;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodItem) => void;
}

export function ModalAddFood({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FoodItem) {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
