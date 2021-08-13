import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateAvatarUseCase";

class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request;
    const avatar = request.file.filename;

    const updateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateAvatarUseCase.execute({ id, avatar });

    return response.status(204).send();
  }
}

export { UpdateAvatarController };
