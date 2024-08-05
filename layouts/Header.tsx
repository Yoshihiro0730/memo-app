import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 w-full">
            <img 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/jira_icon.jpeg`}
                alt="Jira Icon" 
                className="h-10 w-10 object-contain" 
                style={{ maxWidth: 'none', width: '2.5rem', height: '2.5rem' }} 
            />
                <Link href="/" className="flex-grow">
                    <h1 className="text-2xl font-logo text-center text-white">memo app like JIRA</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;