import SkillBadge, { type SkillBadgeProperties } from '@/components/skill/skill-badge.tsx';

type SkillBadgeListProperties = {
  items: SkillBadgeProperties[];
};

function SkillBadgeList({ items }: Readonly<SkillBadgeListProperties>) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1.5">
      {items.map((item) => (
        <SkillBadge key={item.name} {...item} />
      ))}
    </div>
  );
}

export default SkillBadgeList;
