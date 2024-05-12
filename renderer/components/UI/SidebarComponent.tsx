import {FaChevronLeft, FaChevronRight, FaQrcode, FaUser, FaUserPlus, FaUsers} from "react-icons/fa";
import {User} from "../../interfaces";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";

const isActive = (pathname, router) => {
    return router.pathname === pathname ? 'nav-link active' : 'nav-link';
};

interface SidebarComponentProps {
    user?: User | null;
}

const style = `
.sidebar {
    width: 80px; /* Default width */
    transition: width 0.3s ease;
    background-color: #f4f4f4;
    padding: 10px;
    overflow-x: hidden; /* Hide horizontal overflow */
}

.sidebar.open {
    width: 250px; /* Expanded width */
}

.nav-link {
    display: flex;
    align-items: center;
    padding: 10px;
    color: #333;
    text-decoration: none;
}

.nav-link.active {
    font-weight: bold;
    color: #0056b3;
}

.nav-link:hover {
    background-color: #ddd;
}
`

const SidebarComponent = ({ user }: SidebarComponentProps) => {
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const isSidebarOpen = !isCollapsed;

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    const renderSidebarChildren = () => {
        if (!user) return null;

        let links = [
            user.role === 'admin' && { href: "/users", icon: <FaUsers size={26} />, text: "Utilisateurs" },
            user.role === 'admin' && { href: "/create-user", icon: <FaUserPlus size={26} />, text: "Ajouter un Utilisateur" },
            (user.role === 'nurse' || user.role === 'doctor') && { href: "/patients", icon: <FaUser size={26} />, text: "Patients" },
            (user.role === 'nurse' || user.role === 'doctor') && { href: "/create-patient", icon: <FaUserPlus size={26} />, text: "Ajouter un Patient" },
            (user.role === 'nurse' || user.role === 'doctor') && { href: "/scan-qr", icon: <FaQrcode size={26} />, text: "Scanner un code QR" }
        ].filter(Boolean);  // Remove undefined entries for roles

        return links.map(link => (
            <Link key={link.href} href={link.href}>
                <a className={isActive(link.href, router)} style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                    {link.icon}
                    {!isCollapsed && <span style={{marginLeft: '10px'}}>{link.text}</span>}
                </a>
            </Link>
        ));
    };

    return (
        <aside className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
            <h3 onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
                {isCollapsed ? <FaChevronRight size={24} /> : <FaChevronLeft size={24} />}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {renderSidebarChildren()}
            </div>
        </aside>
    );
};

export default SidebarComponent;
