export interface ClassroomMember {
  id: number;
  leader: boolean;
  /** Whether the user's membership in the classroom is pending approval. */
  pending: boolean;
  /** Whether the user is registered for the selected event. */
  registered?: boolean;
  /** The member's individual score for the selected event, if any. Only set if ?event= is specified. */
  readonly score: number | null;
  user_id: number;
  readonly username: string;
}