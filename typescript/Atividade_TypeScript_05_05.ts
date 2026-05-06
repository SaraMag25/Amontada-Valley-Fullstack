//1
let message: string = "Hello TypeScript";

function showMessage(): void {
  console.log(message);
}

//2
let message2: string = "Aprendendo TypeScript";
message2 = "123";

//3
let Useename: string;
let age: number;
let isStudent: boolean;

//4
let price: number = 10;
price = 10.5;

//5
let username: string = "Sara";
username = "20";

//6
let value: any;

value = "Texto";
value = 100;
value = true;

//7
let students: string[] = ["Ana", "João", "Carlos"];

//8
let grades: number[] = [7, 8, 9];

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  return sum / grades.length;
}

//9
function multiply(a: number, b: number): number {
  return a * b;
}

//10
const showStudent = (name: string): string => {
  return `Olá, ${name}`;
};

//11
const student = {
  name: "Ana",
  email: "ana@email.com",
  age: 20
};

console.log(student.name);

//12
const user = {
  name: "Iris",
  email: "iris@email.com",
  avatar: "avatar.png"
};

console.log(user.avatar);

//13
type Teacher = {
  name: string;
  age: number;
  avatarUrl?: string;
};

//14
function signIn(user: { email: string; password: string }): void {
  console.log("Usuário conectado");
}

//15
let response: string | number | null;

response = "ok";
response = 200;
response = null;

//16
interface Product {
  id: number;
  name: string;
  price: number;
}

function showProduct(product: Product): void {
  console.log(product.name);
}

//17
interface Person {
  id: number;
  name: string;
}

interface Teacher2 extends Person {
  courses: string[];
}

interface Student2 extends Person {
  age: number;
}

const teacherObj: Teacher2 = {
  id: 1,
  name: "Carlos",
  courses: ["Engenharia da Computacao", "Fisica"]
};

const studentObj: Student2 = {
  id: 2,
  name: "Ana",
  age: 20
};

//18
type ProductData = {
  id: number;
  name: string;
};

function createProduct(product: ProductData): void {
  console.log(product);
}

//19
type ProductData2 = {
  id: number;
  name: string;
};

type SelectResult = ProductData2[] | null;

function selectProducts(): SelectResult {
  return null;
}

//20
type PersonData = {
  id: number;
  name: string;
};

type TeacherData = PersonData & {
  courses: string[];
};

const teacherData: TeacherData = {
  id: 1,
  name: "João",
  courses: ["TS", "JS"]
};

//21
type Size = "pequeno" | "medio" | "grande";

let size: Size = "grande";

//22
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};

let userResponse = {} as UserResponse;

userResponse.id;
userResponse.name;
userResponse.avatar;

//23
enum Profile {
  Admin = 1,
  Client = 2,
  Seller = 3
}

let profile: Profile = Profile.Admin;
console.log(profile);

//24
enum OrderStatus {
  Pending,
  Paid,
  Canceled
}

function showOrderStatus(status: OrderStatus): void {
  console.log(status);
}

//25
function identity<T>(value: T): T {
  return value;
}

identity<string>("texto");
identity<number>(123);
identity<boolean>(true);

//26
function useState<T>(initialValue: T) {
  let value = initialValue;

  return {
    get: () => value,
    set: (newValue: T) => {
      value = newValue;
    }
  };
}

const state = useState<string>("oi");
state.set("novo valor");
console.log(state.get());

//27
interface User {
  id: number;
  name: string;
  email: string;
}

let updatedUser: Partial<User> = {
  name: "Novo Nome"
};

//28
interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

type BookPreview = Pick<Book, "title" | "pages">;

type BookWithoutDescription = Omit<Book, "description">;

const preview: BookPreview = {
  title: "Livro",
  pages: 100
};

const bookNoDesc: BookWithoutDescription = {
  title: "Livro",
  pages: 100,
  author: "Autor"
};

//29
type ProfileType = "admin" | "user" | "visitante";

const profileCount: Record<ProfileType, number> = {
  admin: 1,
  user: 2,
  visitante: 3
};

//30
const icons = {
  home: "home.png",
  add: "add.png",
  remove: "remove.png",
  edit: "edit.png"
};

type IconsType = typeof icons;
type IconName = keyof IconsType;

let icon: IconName = "home";

function getIcon(name: IconName): string {
  return icons[name];
}