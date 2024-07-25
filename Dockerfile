# Wykorzystaj oficjalny obraz Node.js jako bazowy
FROM node:20-alpine

# Ustaw katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Skopiuj package.json oraz package-lock.json do katalogu roboczego
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików aplikacji do katalogu roboczego
COPY . .

# Ustaw zmienną środowiskową NODE_ENV na produkcję
# ENV NODE_ENV production

# Zbuduj aplikację Next.js
RUN npm run build

# Otwórz port 3000a
EXPOSE 3000

# Uruchom aplikację
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
# CMD npm run dev
# CMD ["npm", "run dev"]
