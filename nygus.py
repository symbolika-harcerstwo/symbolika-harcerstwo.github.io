import geopandas as gpd
from shapely.geometry import Polygon
import matplotlib.pyplot as plt

# Definicja wielokątów reprezentujących granice Włoch z lat 1945 i 1947
italy_1945_coords = [
    (6.6, 47.1), (18.5, 47.1), (18.5, 45.5), (9.1, 45.5), (9.1, 43.7),
    (7.2, 43.7), (7.2, 42.6), (6.6, 42.6), (6.6, 47.1)  # zamknięcie pętli
]

italy_1947_coords = [
    (6.6, 47.1), (18.5, 47.1), (18.5, 45.5), (9.1, 45.5), (9.1, 43.7),
    (11.9, 43.7), (11.9, 42.4), (11.1, 42.4), (11.1, 42.1), (7.2, 42.1),
    (7.2, 42.6), (6.6, 42.6), (6.6, 47.1)  # zamknięcie pętli
]

# Tworzenie ramki danych geopandas z wielokątami granic
italy_1945_polygon = gpd.GeoDataFrame(geometry=[Polygon(italy_1945_coords)])
italy_1947_polygon = gpd.GeoDataFrame(geometry=[Polygon(italy_1947_coords)])

# Ustawienie figury i osi
fig, ax = plt.subplots()

# Narysowanie granic Włoch z lat 1945 i 1947
italy_1945_polygon.plot(ax=ax, color='blue')
italy_1947_polygon.plot(ax=ax, color='red')

# Dodanie tytułu i wyświetlenie mapy
plt.title('Granice Włoch z lat 1945 i 1947')
plt.show()
