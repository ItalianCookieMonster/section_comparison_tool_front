import { NavLink } from "react-router-dom"
import { LucideIcon, BrickWall, CircleArrowLeft, ClipboardMinus, Cuboid, Factory, FolderDot, UsersRound } from "lucide-react"

interface NavItemProps {
    to: string;
    icon: string;
    label: string;
}

const getIcon = (icon: string): LucideIcon => {
    switch (icon) {
        case "Cuboid": return Cuboid
        case "FolderDot": return FolderDot
        case "BrickWall": return BrickWall
        case "ClipboardMinus": return ClipboardMinus
        case "Factory": return Factory
        case "UsersRound": return UsersRound
        case "CircleArrowLeft": return CircleArrowLeft
        default: return CircleArrowLeft // fallback
    }
}

export const NavItem = ({ to, icon, label }: NavItemProps) => {
    const IconComponent = getIcon(icon)
    return (
        <li>
            <NavLink to={to}>
                <IconComponent />
                {label}
            </NavLink>
        </li>
    )
}