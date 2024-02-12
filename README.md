# Вороний сервер Maincraft (1.19.2)

IP сервера: 81.90.181.11

## Настройка клиента
1. Качаем [оригинальный клиент](https://www.minecraft.net/ru-ru/download)
2. Качаем [forge](http://files.minecraftforge.net/) версии 1.19.2-43.3.7 и устанавливаем его с выбранной опцией "Client"
3. Скачиваем текущий репозиторий (зеленая кнопка "code" > Download ZIP)
4. Распаковываем содержимое архива из директории "src" в папку с игрой 

#### Windows:
   >%appdata%\\.minecraft

#### Linux:
   >/home/{$username}/.minecraft

## Настраиваем лимит потребляемой памяти (ОЗУ)
1. Запускаем Minecraft Launcher
2. Переходим во вкладку "Установки" и напротив строки "forge" нажимаем "..." > Настройки
3. Нажимаем "больше настроек". В появившейся строке "параметры jvm" меняем число после букв -Xmx
>Пример: "-Xmx6G -XX..." соответствует 6 гб оперативной памяти
4. Сохраняем

## Устанавливаем шейдеры
1. Запускаем игру
2. Переходим в Настройки > Настройки графики > Шейдеры
3. Выбираем понравившийся вариант
