import { Badge } from '@/components/ui/badge.tsx';

export type SkillBadgeProperties = {
  name: string;
};

function SkillBadge({ name }: Readonly<SkillBadgeProperties>) {
  return <Badge variant="outline">{name}</Badge>;
}

export default SkillBadge;
