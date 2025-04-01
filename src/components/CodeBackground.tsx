import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeBackground = () => {
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [currentColumn, setCurrentColumn] = useState(0);

  useEffect(() => {
    const generateCodeLines = () => {
      const lines = [
        "const App = () => {",
        "  const [data, setData] = useState([]);",
        "  useEffect(() => {",
        "    async function fetchData() {",
        "      const response = await api.get('/data');",
        "      setData(response.data);",
        "    }",
        "    fetchData();",
        "  }, []);",
        "  return (",
        "    <div className='app'>",
        "      {data.map(item => (",
        "        <Component key={item.id} {...item} />",
        "      ))}",
        "    </div>",
        "  );",
        "};",
        "function createServer() {",
        "  const app = express();",
        "  app.use(cors());",
        "  app.use(express.json());",
        "  return app;",
        "}",
        "async function connectDB() {",
        "  try {",
        "    await mongoose.connect(process.env.MONGO_URI);",
        "    console.log('Connected to MongoDB');",
        "  } catch (err) {",
        "    console.error(err);",
        "  }",
        "}",
        "const styles = {",
        "  container: `",
        "    flex flex-col",
        "    items-center",
        "    justify-center",
        "    min-h-screen",
        "    bg-gradient-to-r",
        "    from-purple-500",
        "    to-indigo-500",
        "  `",
        "}"
      ];

      // Duplicate and shuffle the lines for more variety
      const duplicatedLines = [...lines, ...lines, ...lines];
      const shuffledLines = duplicatedLines.sort(() => Math.random() - 0.5);
      setCodeLines(shuffledLines);
    };

    generateCodeLines();

    // Rotate through columns more frequently
    const interval = setInterval(() => {
      setCurrentColumn((prev) => (prev + 1) % 3);
    }, 3000); // Reduced from 4000ms to 3000ms for more dynamic effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex h-full">
        {[0, 1, 2].map((columnIndex) => (
          <div
            key={columnIndex}
            className="flex-1 px-4 py-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`column-${columnIndex}-${currentColumn === columnIndex ? 'active' : 'inactive'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: currentColumn === columnIndex ? 0.7 : 0.45, // Significantly increased opacity
                  y: 0 
                }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="space-y-1"
              >
                {codeLines.slice(columnIndex * 15, (columnIndex + 1) * 15).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      color: currentColumn === columnIndex ? '#bfdbfe' : '#93c5fd' // Brighter blues
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.03,
                    }}
                    className={`font-mono text-sm sm:text-base whitespace-pre overflow-hidden transition-colors duration-500
                      ${currentColumn === columnIndex ? 'text-blue-200' : 'text-blue-300'}
                    `}
                    style={{
                      textShadow: currentColumn === columnIndex 
                        ? '0 0 15px rgba(191, 219, 254, 0.7), 0 0 5px rgba(147, 197, 253, 0.9)' // Multiple shadows for stronger glow
                        : '0 0 12px rgba(147, 197, 253, 0.6), 0 0 4px rgba(96, 165, 250, 0.8)',
                      fontWeight: currentColumn === columnIndex ? '500' : '400' // Slightly bolder for active column
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Enhanced gradient overlays with more subtle fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/40 to-transparent pointer-events-none" />
      
      {/* Additional ambient glow */}
      <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none" />
    </div>
  );
};

export default CodeBackground; 