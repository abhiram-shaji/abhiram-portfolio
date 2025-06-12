import Image from 'next/image';

export default function ProfileHeader() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Profile Image */}
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-muted shadow-lg group">
                <Image
                    src="https://i.ibb.co/LdGpSJ52/bio-img.jpg"
                    alt="Abhiram Shaji"
                    fill
                    className="object-cover transition duration-300 ease-in-out group-hover:grayscale"
                />
            </div>


            {/* Name + Subtitle */}
            <div className="text-center sm:text-left">
                <h1 className="text-4xl font-bold tracking-tight">Abhiram Shaji</h1>
                <h2 className="text-lg text-muted-foreground font-medium mt-2">
                    Full Stack Developer • Designer • Creator
                </h2>
            </div>
        </div>
    );
}
