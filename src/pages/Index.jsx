import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FocusCards } from '@/components/ui/focus-cards';

const Index = () => {
  const cards = [
    { src: "https://media.istockphoto.com/id/497144224/photo/hiker-walks-on-train-in-himalayas.jpg?s=612x612&w=0&k=20&c=j9K5_AM1dIIh8j7ckuDOvvGl-FpaAbxVjT5O2liWfaM=", title: "EBC Treak" },
    { src: "https://www.endlessdistances.com/wp-content/uploads/2019/05/img_8368.jpg", title: "ABC Trek" },
    { src: "https://f6d3w8j9.rocketcdn.me/wp-content/uploads/2023/04/nepal-trekking7.jpg", title: "MBC Trek" },
    { src: "https://www.greatnepaltreks.com/wp-content/uploads/2019/11/most-popular-trekking-destinations-in-nepal-24.gif", title: "Namche Bazar Trek" },
    { src: "https://hwwtreks.com/uploads/0000/417/2021/08/02/less-crowd.jpg", title: "Tsho Rolpa Trek" },
    { src: "https://media.tacdn.com/media/attractions-content--1x-1/10/00/69/b7.jpg", title: "Tilicho Trek" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Full-page background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Navbar */}
      <nav className="relative z-10 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div>
            <img src="/logo.png" alt="Wilderness Experience Logo" className="h-16 w-auto" />
          </div>
          <div className="flex justify-center space-x-16">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/destination">Destination</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/packages">Our Packages</NavLink>
          </div>
          <div className="w-16"></div> {/* Empty div for balance */}
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-10">
        {/* CardContainer */}
        <CardContainer className="inter-var mb-12">
          <CardBody className="bg-gray-50 bg-opacity-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-50 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center items-center">
            <CardItem
              translateZ="50"
              className="text-3xl font-bold text-black-600 dark:text-white text-center"
            >
              Wilderness Experience
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black-500 text-lg max-w-sm mt-2 dark:text-neutral-300 text-center"
            >
              &quot;Nepal: Where the mountains touch the sky and every journey leads to peace.&quot;
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* FocusCards - Below CardContainer */}
        <div className="w-full px-6">
          <FocusCards cards={cards} />
        </div>

      </main>

      {/* Custom font styles */}
      <style>
        {`
          @font-face {
            font-family: 'Segoe UI Historic';
            src: url('/fonts/segoe-ui-historic.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
    </div>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white text-2xl font-semibold hover:text-gray-300 transition-colors duration-300 font-segoe"
  >
    {children}
  </Link>
);

export default Index;
