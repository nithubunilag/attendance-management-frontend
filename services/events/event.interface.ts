export interface IEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  inviteLink: string;
  inviteQrCode: string;
  updatedAt: string;
  createdAt: string;
  limit: string | null;
  creatorId: string | null;
  creatorType: string | null;
}
