import { useLocation, useNavigate } from "@remix-run/react";

export default function Navbar(){

    const navigate = useNavigate();
    const location = useLocation();

    const route = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Work',
            path: '/work'
        }
    ]

    return (
        <div className="max-w-7xl mx-auto">
            <div className="p-4 flex justify-between">
                {
                    route.map((item, index) => {
                        return (
                            <h3 key={index} className={`text-3xl font-semibold hover:text-neutral-400 cursor-pointer ${location.pathname === item.path ? 'text-neutral-400' : ''}`} onClick={() => navigate(item.path)}>{item.name}</h3>
                        )
                    })
                }
            </div>
        </div>
    )
}