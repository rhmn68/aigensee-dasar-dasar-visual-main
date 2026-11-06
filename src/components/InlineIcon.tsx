import { Ban, BookOpen, Bot, Brain, BrickWall, Circle, CircleCheck, CircleX, DraftingCompass, Drama, Eye, Files, Flame, Flower2, Frown, Gem, GraduationCap, Handshake, Image, Landmark, Laptop, Leaf, LibraryBig, Lightbulb, MapPin, Megaphone, Meh, Microscope, Newspaper, Palette, PartyPopper, Puzzle, Rocket, Ruler, Sandwich, Scale, Scroll, Search, Shield, Smile, Sprout, Square, Star, Sun, Tag, Target, Telescope, TriangleAlert, Type, Wind, Zap, type LucideIcon } from 'lucide-react';

const icons = { Ban, BookOpen, Bot, Brain, BrickWall, Circle, CircleCheck, CircleX, DraftingCompass, Drama, Eye, Files, Flame, Flower2, Frown, Gem, GraduationCap, Handshake, Image, Landmark, Laptop, Leaf, LibraryBig, Lightbulb, MapPin, Megaphone, Meh, Microscope, Newspaper, Palette, PartyPopper, Puzzle, Rocket, Ruler, Sandwich, Scale, Scroll, Search, Shield, Smile, Sprout, Square, Star, Sun, Tag, Target, Telescope, TriangleAlert, Type, Wind, Zap } satisfies Record<string, LucideIcon>;

export function InlineIcon({ name, color }: { name: keyof typeof icons; color?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" width="1em" height="1em" color={color} style={{ display: 'inline-block', verticalAlign: '-0.125em', flexShrink: 0 }} />;
}
