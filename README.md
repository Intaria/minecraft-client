# Вороний сервер Maincraft (1.18.1)

[Отличия от оригинальной версии](https://github.com/Intaria/minecraft/blob/main/docs/changes.md) • [Будущие изменения](https://github.com/Intaria/minecraft/blob/main/docs/plans.md)

IP сервера: 81.90.181.11

## Настройка клиента
1. Качаем [оригинальный клиент](https://www.minecraft.net/ru-ru/download)
2. Качаем [forge](http://files.minecraftforge.net/) для версии 1.18.1 и устанавливаем его с выбранной опцией "Client"
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

## Устанавливаем шейдеры и текстурпак
1. Запускаем игру
2. Переходим в Настройки > Настройки графики > Шейдеры
3. Выбираем подходящий вариант
4. Переходим в Настрйоки > Наборы ресурсов
5. Перемещаем в правую часть текстуры Stay True и все текстуры животных (Better X & Real animals)

#### Оптимизация шейдеров

В случае, если вы испытываете проблемы с производительностью, рекомендуется произвести следующие действия:

1. Запускаем игру
2. Переходим в Настройки > Настройки графики
3. Выставляем следующие опции: 
> Графика: Быстро | Частота кадров: Максимум | Мягкое освещение: Минимум / 50% | Свет предметов: Выкл
4. Переходим в Настройки > Настройки графики > Производительность
> Область рендеринга: Вкл | Быстрый рендер: Вкл | Быстрое вычисление: Вкл
5. Переходим в Настройки > Настройки графики > Элементы игры
> Облака: Выкл | Листья: Быстро | Туман: Выкл
6. Переходим в Настройки > Настройки графики > Шейдеры и, выбрав используемый вариант, выставляем справа следующие настройки:
> Качество теней: 0.5