import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specificationsList = await this.specificationRepository.list();

    return specificationsList;
  }
}

export { ListSpecificationUseCase };
