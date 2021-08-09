import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}
  execute(): Specification[] {
    const specificationsList = this.specificationRepository.list();

    return specificationsList;
  }
}

export { ListSpecificationUseCase };
