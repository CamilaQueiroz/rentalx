interface ICreateCarDTO {
  id?: string;
  name: string;
  description: string;
  daily_rate: number;
  available: boolean;
  licence_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  created_at?: Date;
}

export { ICreateCarDTO };
